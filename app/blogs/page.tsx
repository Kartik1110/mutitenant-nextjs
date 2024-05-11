"use client"

import BlurImage from "@/components/ui/blur-image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { BLOG_DATA } from "@/constants";
import { Theme } from "@/interfaces";
import { useCallback, useEffect, useMemo, useState } from "react";

export default function Blogs() {
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
        <div style={{ backgroundColor: styles?.palette.secondaryForeground, color: styles?.palette.secondary }}
            className="pb-20 w-full px-[30vw] pt-20">
            <h1 className="text-5xl text-center font-bold">Blogs</h1>

            <div>
                {BLOG_DATA.map((data) => (
                    <Card key={data.id} x-chunk="dashboard-01-chunk-0" className="flex flex-row my-10">
                        <CardHeader className="max-w-[50%] flex flex-col items-center justify-evenly space-y-0">
                            <CardTitle className="text-4xl font-medium">
                                {data.title}
                            </CardTitle>
                            <div>
                                {data.description}
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="pt-6">
                                <div className="group relative mx-auto h-100 w-auto overflow-hidden sm:h-150 lg:rounded-xl">
                                    <BlurImage
                                        alt={"Image"}
                                        className="h-full w-full object-cover group-hover:scale-105 group-hover:duration-300"
                                        width={600}
                                        height={300}
                                        src={data.image}
                                    />
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

        </div>
    );
}