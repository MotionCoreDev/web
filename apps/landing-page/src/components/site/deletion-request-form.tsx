"use client";

import * as React from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n/config";
import type { Dictionary } from "@/i18n/types";
import { RichText } from "./rich-text";

// Netlify Forms registers this form from public/__forms.html at deploy time; field names must match.
export const DELETION_FORM_NAME = "account-deletion";
// Stable values for the request inbox, in the order of form.dataItems.
const DATA_KEYS = ["workouts", "measurements", "profile-photo", "bug-reports"] as const;

type Scope = "account" | "data";
type Status = "idle" | "submitting" | "sent" | "failed";

interface Props {
    locale: Locale;
    form: Dictionary["deletion"]["form"];
}

export function DeletionRequestForm({ locale, form }: Props) {
    const [email, setEmail] = React.useState("");
    const [scope, setScope] = React.useState<Scope>("account");
    const [data, setData] = React.useState<string[]>([]);
    const [details, setDetails] = React.useState("");
    const [confirmed, setConfirmed] = React.useState(false);
    const [botField, setBotField] = React.useState("");
    const [status, setStatus] = React.useState<Status>("idle");
    const [error, setError] = React.useState<string | null>(null);

    const toggleData = (key: string) =>
        setData((current) => (current.includes(key) ? current.filter((item) => item !== key) : [...current, key]));

    const reset = () => {
        setEmail("");
        setScope("account");
        setData([]);
        setDetails("");
        setConfirmed(false);
        setStatus("idle");
        setError(null);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setError(null);

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return setError(form.errorEmail);
        if (scope === "data" && data.length === 0) return setError(form.errorData);
        if (!confirmed) return setError(form.errorConfirm);

        const body = new URLSearchParams({
            "form-name": DELETION_FORM_NAME,
            "bot-field": botField,
            email: email.trim(),
            scope,
            data: scope === "data" ? data.join(", ") : "",
            details: details.trim(),
            language: locale,
            confirmed: "yes",
        });

        setStatus("submitting");
        try {
            const response = await fetch("/__forms.html", {
                method: "POST",
                headers: { "Content-Type": "application/x-www-form-urlencoded" },
                body: body.toString(),
            });
            if (!response.ok) throw new Error(`HTTP ${response.status}`);
            setStatus("sent");
        } catch {
            setStatus("failed");
            setError(form.errorGeneric);
        }
    };

    if (status === "sent") {
        return (
            <div role="status" className="flex flex-col items-start gap-4 rounded-2xl border border-success/40 bg-success/10 p-6">
                <CheckCircle2 className="size-8 text-success" />
                <div>
                    <h3 className="text-lg font-semibold text-foreground">{form.successTitle}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                        <RichText text={form.successBody} locale={locale} />
                    </p>
                </div>
                <Button type="button" variant="outline" size="sm" onClick={reset}>
                    {form.again}
                </Button>
            </div>
        );
    }

    return (
        <form name={DELETION_FORM_NAME} onSubmit={handleSubmit} noValidate className="space-y-6">
            {/* Honeypot: people never see or fill it, spam bots do. */}
            <p className="hidden" aria-hidden>
                <label>
                    Leave this empty
                    <input name="bot-field" tabIndex={-1} autoComplete="off" value={botField} onChange={(e) => setBotField(e.target.value)} />
                </label>
            </p>

            <div className="space-y-2">
                <Label htmlFor="deletion-email">{form.email}</Label>
                <Input
                    id="deletion-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-describedby="deletion-email-help"
                    className="h-11 rounded-xl"
                />
                <p id="deletion-email-help" className="text-xs text-muted-foreground">
                    {form.emailHelp}
                </p>
            </div>

            <fieldset className="space-y-3">
                <legend className="mb-3 text-sm font-medium text-foreground">{form.scope}</legend>
                <ScopeOption
                    checked={scope === "account"}
                    onSelect={() => setScope("account")}
                    title={form.scopeAccount}
                    help={form.scopeAccountHelp}
                    value="account"
                />
                <ScopeOption
                    checked={scope === "data"}
                    onSelect={() => setScope("data")}
                    title={form.scopeData}
                    help={scope === "data" ? form.scopeDataHelp : ""}
                    value="data"
                >
                    {scope === "data" && (
                        <div className="mt-4 grid gap-2 sm:grid-cols-2">
                            {form.dataItems.map((label, idx) => {
                                const key = DATA_KEYS[idx];
                                return (
                                    <label key={key} className="flex cursor-pointer items-center gap-3 rounded-lg border border-border/60 bg-background/60 px-3 py-2.5 text-sm">
                                        <input
                                            type="checkbox"
                                            checked={data.includes(key)}
                                            onChange={() => toggleData(key)}
                                            className="size-4 accent-[hsl(var(--primary))]"
                                        />
                                        {label}
                                    </label>
                                );
                            })}
                        </div>
                    )}
                </ScopeOption>
            </fieldset>

            <div className="space-y-2">
                <Label htmlFor="deletion-details">{form.details}</Label>
                <Textarea
                    id="deletion-details"
                    name="details"
                    rows={3}
                    maxLength={1000}
                    placeholder={form.detailsPlaceholder}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="rounded-xl"
                />
            </div>

            <label className="flex cursor-pointer items-start gap-3 text-sm text-foreground">
                <input
                    type="checkbox"
                    name="confirmed"
                    checked={confirmed}
                    onChange={(e) => setConfirmed(e.target.checked)}
                    className="mt-0.5 size-4 shrink-0 accent-[hsl(var(--primary))]"
                />
                {form.confirm}
            </label>

            {error && (
                <p role="alert" className="rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-foreground">
                    <RichText text={error} locale={locale} />
                </p>
            )}

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <Button type="submit" size="lg" disabled={status === "submitting"} className="w-full sm:w-auto">
                    {status === "submitting" ? (
                        <>
                            <Loader2 className="mr-2 size-4 animate-spin" />
                            {form.submitting}
                        </>
                    ) : (
                        form.submit
                    )}
                </Button>
                <p className="text-xs text-muted-foreground">{form.privacyNote}</p>
            </div>
        </form>
    );
}

function ScopeOption({
    checked,
    onSelect,
    title,
    help,
    value,
    children,
}: {
    checked: boolean;
    onSelect: () => void;
    title: string;
    help: string;
    value: Scope;
    children?: React.ReactNode;
}) {
    return (
        <div className={cn("rounded-2xl border p-4 transition-colors", checked ? "border-primary/60 bg-primary/[0.06]" : "border-border/60 bg-background/40")}>
            <label className="flex cursor-pointer items-start gap-3">
                <input type="radio" name="scope" value={value} checked={checked} onChange={onSelect} className="mt-1 size-4 shrink-0 accent-[hsl(var(--primary))]" />
                <span>
                    <span className="block text-sm font-medium text-foreground">{title}</span>
                    {help && <span className="mt-0.5 block text-xs text-muted-foreground">{help}</span>}
                </span>
            </label>
            {children}
        </div>
    );
}

export default DeletionRequestForm;
