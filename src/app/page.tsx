import { db } from "~/server/db";
import Link from "next/link";

export const dynamic = "force-dynamic";

const mockURLs = [
    "https://utfs.io/f/2cfbbba4-e34a-41d5-8aaf-cea638c4c369-fdaxq7.png",
    "https://utfs.io/f/a45300f7-1ec0-4abf-8cb1-089f3113d1fb-3lm8t5.jpg",
    "https://utfs.io/f/68b147b2-bb47-4c49-99c8-e618a797bea1-pdcyvo.png",
    "https://utfs.io/f/bb7409bd-03b0-4268-b0f4-c27c380b814b-fda7xx.png",
];

const mockImages = mockURLs.map((url, index) => ({
    id: index + 1,
    url,
}));

export default async function HomePage() {

    return (
        <main className="">
            <div className="flex flex-wrap gap-4">
                {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
                    <div key={image.id + "-" + index} className="w-48">
                        <img src={image.url}></img>
                    </div>
                ))}
            </div>
        </main>
    );
}
