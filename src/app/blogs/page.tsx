import Link from "next/link";
import blogs from "@/data/blogs.json";


export default function BlogsPage() {
    // Sort blogs by date descending (latest first)
    const sortedBlogs = [...blogs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // return (
    //     <>
    //         <Header2 />

    //         <div className="bg-black text-white pt-5 min-h-screen">
    //             <section className="max-w-6xl mx-auto py-16 px-4">
    //                 <h1 className="text-4xl font-bold mb-8">Blogs</h1>
    //                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    //                     {sortedBlogs.map((blog) => (
    //                         <div key={blog.id} className="bg-[#181818] rounded-lg shadow p-4 flex flex-col h-full border border-gray-800">
    //                                 <img
    //                                     src={blog.previewImage}
    //                                     alt={blog.title}
    //                                     className="w-full h-48 object-cover rounded mb-4"
    //                                 />

    //                             <h2 className="text-2xl font-semibold mb-2">
    //                                 <Link href={`/blogs/${blog.slug}`} className="hover:underline">
    //                                     {blog.title}
    //                                 </Link>
    //                             </h2>
    //                             <p className="text-gray-400 mb-2 line-clamp-3">{blog.excerpt}</p>
    //                             <span className="text-xs text-gray-500 mt-auto">{blog.date}</span>
    //                         </div>
    //                     ))}
    //                 </div>
    //             </section>
    //         </div>
    //         <Footer />
    //     </>
    // );

    return (
        <>
            {/* <Header2 /> */}

            <div className="text-white pt-5 min-h-screen">
                <section className="max-w-6xl mx-auto py-16 px-4">
                    <h1 className="text-6xl font-extrabold mb-12 py-3 text-left tracking-tight bg-gradient-to-r from-white via-gray-400 to-white bg-clip-text">
                        Blogs
                    </h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                        {sortedBlogs.map((blog) => (
                            <Link
                                key={blog.id}
                                href={`/blogs/${blog.slug}`}
                                className="group bg-white/5 backdrop-blur-md border border-gray-800 rounded-2xl shadow-xl flex flex-col h-full transition-transform hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            >
                                <div className="relative overflow-hidden rounded-t-2xl">
                                    <img
                                        src={blog.previewImage}
                                        alt={blog.title}
                                        className="w-full h-56 object-cover transition-transform group-hover:scale-105"
                                        style={{ aspectRatio: "16/9" }}
                                    />
                                    <div className="absolute top-4 right-4 bg-black/60 px-3 py-1 rounded-full text-xs font-semibold text-blue-300 shadow">
                                        {new Date(blog.date).toLocaleDateString("en-GB", {
                                            day: "2-digit",
                                            month: "short",
                                            year: "numeric",
                                        })}
                                    </div>
                                </div>
                                <div className="flex-1 flex flex-col p-5">
                                    <h2 className="text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                                        {blog.title}
                                    </h2>
                                    <p className="text-gray-300 mb-4 line-clamp-3">{blog.excerpt}</p>
                                    <span className="mt-auto text-xs text-gray-500 tracking-wide uppercase">
                                        Read More &rarr;
                                    </span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
            {/* <Footer /> */}
        </>
    );
}