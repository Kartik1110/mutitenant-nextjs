import BlurImage from "@/components/ui/blur-image";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function Blogs() {
    return (
        <div className="mb-20 w-full px-[30vw] pt-20">
            <h1 className="text-4xl">Blogs</h1>
            <Card x-chunk="dashboard-01-chunk-0" className="flex flex-row my-10">
                <CardHeader className="max-w-[50%] flex flex-col items-center justify-evenly space-y-0">
                    <CardTitle className="text-lg font-medium">
                        Total Revenue
                    </CardTitle>
                    <div>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim architecto nostrum eaque ex fuga! Fugiat voluptatem aut eum ad? Sequi amet esse dolores fugiat minima, porro architecto illum quo reiciendis.
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="pt-6">
                        <div className="group relative mx-auto h-100 w-auto overflow-hidden sm:h-150 lg:rounded-xl">
                            <BlurImage
                                alt={"Image"}
                                blurDataURL={""}
                                className="h-full w-full object-cover group-hover:scale-105 group-hover:duration-300"
                                width={600}
                                height={300}
                                src={"/blog-1.jpg"}
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>
            <Card x-chunk="dashboard-01-chunk-0" className="flex flex-row">
                <CardHeader className="max-w-[50%] flex flex-col items-center justify-evenly space-y-0">
                    <CardTitle className="text-lg font-medium">
                        Total Revenue
                    </CardTitle>
                    <div>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim architecto nostrum eaque ex fuga! Fugiat voluptatem aut eum ad? Sequi amet esse dolores fugiat minima, porro architecto illum quo reiciendis.
                    </div>
                </CardHeader>
                <CardContent>
                    <div className="pt-6">
                        <div className="group relative mx-auto h-100 w-auto overflow-hidden sm:h-150 lg:rounded-xl">
                            <BlurImage
                                alt={"Image"}
                                blurDataURL={""}
                                className="h-full w-full object-cover group-hover:scale-105 group-hover:duration-300"
                                width={600}
                                height={300}
                                src={"/blog-2.jpg"}
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}