"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Theme } from "@/interfaces";
import { useCallback, useEffect, useMemo, useState } from "react";
import { ADMIN_CHART_DATA, ADMIN_DATA } from "@/constants";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts"

export default function AdminPage() {
    const subdomain = useMemo(() => window.location.hostname.split(".")[0], []);
    const [styles, setStyles] = useState<Theme>();

    // Fetch theme data
    const handleFetch = useCallback(async () => {
        const res = await fetch(`/api/theme/${subdomain}`);
        const data = await res.json();
        setStyles(data);
    }, [subdomain]);

    useEffect(() => {
        handleFetch();
    }, [handleFetch]);

    return (
        <div style={{ backgroundColor: styles?.palette.primaryForeground }} className="pb-20 h-screen w-full px-[30vw] pt-20">
            <h1 className="text-5xl text-center font-bold pb-10">Welcome to your dashboard</h1>
            <div className="grid gap-20 md:grid-cols-2 md:gap-8 lg:grid-cols-2">
                {ADMIN_DATA.map((data, index) => (
                    <Card key={data.id} x-chunk={`dashboard-01-chunk-${index}`} className="border border-slate-400 hover:shadow-md">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                {data.title}
                            </CardTitle>
                            <data.icon className="h-4 w-4 text-muted-foreground" style={{ color: styles?.palette.primary }} />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold" style={{ color: styles?.palette.primary }}>{data.value}</div>
                            <p className="text-xs text-muted-foreground">
                                {data.percentage}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="mt-10 h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={ADMIN_CHART_DATA}>
                        <XAxis dataKey="label" />
                        <YAxis />
                        <Bar dataKey="goal" fill={styles?.palette.primary} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}