// import Footer from "@/components/Footer";
// import Header2 from "@/components/header2";
import blogs from "@/data/blogs.json";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import styles from "./BlogDetail.module.css";

type Params = Promise<{ slug: string }>;

// export default async function Page({ params }: { params: Params }) {
//   const { slug } = await params;
//   const blog = blogs.find((b) => b.slug === slug);

//   if (!blog) {
//     return (
//       <>
//         <Header2 />
//         <div className="bg-black text-white min-h-screen">
//           <div className="max-w-2xl mx-auto py-16 px-4">
//             <h1 className="text-2xl font-bold mb-4">Blog not found</h1>
//             <Link href="/blogs" className="text-blue-500 underline">
//               Back to Blogs
//             </Link>
//           </div>
//         </div>
//         <Footer />
//       </>
//     );
//   }

//   return (
//     <>
//       <Header2 />
//       <div className="bg-black text-white min-h-screen">
//         <section className="max-w-2xl mx-auto py-16 px-4">
//           <Link
//             href="/blogs"
//             className="text-blue-500 underline mb-4 inline-block"
//           >
//             ← Back to Blogs
//           </Link>
//           <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
//           <span className="text-xs text-gray-500">{blog.date}</span>
//           <div className="mt-6 text-lg space-y-4">
//             {Array.isArray(blog.content) ? (
//               blog.content.map((para: string, idx: number) => (
//                 <ReactMarkdown key={idx}>{para}</ReactMarkdown>
//               ))
//             ) : (
//               <ReactMarkdown>{blog.content}</ReactMarkdown>
//             )}
//           </div>
//           {blog.images && blog.images.length > 0 && (
//             <div className="mt-8 space-y-4">
//               {blog.images.map((img: string, idx: number) => (
//                 <img
//                   key={idx}
//                   src={img}
//                   alt={`Blog image ${idx + 1}`}
//                   className="w-full rounded shadow"
//                   style={{ maxHeight: 400, objectFit: "cover" }}
//                 />
//               ))}
//             </div>
//           )}
//         </section>
//       </div>
//       <Footer />
//     </>
//   );
// }


export default async function Page({ params }: { params: Params }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);

  const publisher = "Saga Team";

  const relatedBlogs = blogs
    .filter((b) => b.slug !== slug)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  if (!blog) {
    return (
      <>
        {/* <Header2 /> */}
        <div className="text-white min-h-screen">
          <div className="max-w-2xl mx-auto py-16 px-4">
            <h1 className="text-2xl font-bold mb-4">Blog not found</h1>
            <Link href="/blogs" className="text-blue-500 underline">
              Back to Blogs
            </Link>
          </div>
        </div>
        {/* <Footer /> */}
      </>
    );
  }

  return (
    <>
      {/* <Header2 /> */}
      <div className="text-white pt-5 min-h-screen">
        <section className="w-full py-16 px-4">
          {/* Title row with back button */}
          <div className={styles.blogTitleRow}>
            <Link
              href="/blogs"
              className={styles.backButton}
              aria-label="Back to Blogs"
            >
              <svg
                width="48"
                height="48"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="block"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </Link>
            <h1 className={styles.blogTitle}>{blog.title}</h1>
          </div>
          {/* Caption */}
          <div className={styles.blogCaption}>{blog.excerpt}</div>
          {/* Publisher and date */}
          <div className={styles.blogMeta}>
            {publisher} &middot;{" "}
            {new Date(blog.date).toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </div>
          {/* Preview image */}
          {blog.previewImage && (
            <div className={styles.previewImageWrapper}>
              <img
                src={blog.previewImage}
                alt="Preview"
                className={styles.previewImage}
              />
            </div>
          )}
          {/* Content */}
          <div className={styles.contentWrapper}>
            <div className="prose prose-invert prose-lg mb-16 space-y-8">
              {Array.isArray(blog.content)
                ? blog.content.map((para: string, idx: number) => (
                  <ReactMarkdown key={idx}>{para}</ReactMarkdown>
                ))
                : <ReactMarkdown>{blog.content}</ReactMarkdown>
              }
            </div>
          </div>
          {/* Related Blogs */}
          {/* <div className={styles.relatedBlogs}>
            <h2 className={styles.relatedTitle}>Related Blogs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedBlogs.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blogs/${rel.slug}`}
                  className="bg-[#181818] rounded-lg shadow p-4 flex flex-col border border-gray-800 hover:bg-[#23232a] transition"
                >
                  {rel.previewImage && (
                    <img
                      src={rel.previewImage}
                      alt={rel.title}
                      className="w-full h-32 object-cover rounded mb-3"
                    />
                  )}
                  <h3 className="text-lg font-semibold mb-1">{rel.title}</h3>
                  <span className="text-xs text-gray-500">{new Date(rel.date).toLocaleDateString()}</span>
                </Link>
              ))}
            </div>
          </div> */}
          <div className={styles.relatedBlogs}>
            <h2 className={styles.relatedTitle}>Related Blogs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {relatedBlogs.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blogs/${rel.slug}`}
                  className="group bg-white/5 backdrop-blur-md border border-gray-800 rounded-2xl shadow-xl flex flex-col h-full transition-transform hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500 focus:ring-2 focus:ring-blue-500"
                >
                  <div className="relative overflow-hidden rounded-t-2xl">
                    {rel.previewImage && (
                      <img
                        src={rel.previewImage}
                        alt={rel.title}
                        className="w-full h-32 object-cover rounded-t-2xl transition-transform group-hover:scale-105"
                      />
                    )}
                    <div className="absolute top-3 right-3 bg-black/60 px-3 py-1 rounded-full text-xs font-semibold text-blue-300 shadow">
                      {new Date(rel.date).toLocaleDateString("en-GB", {
                        day: "2-digit",
                        month: "short",
                        year: "numeric",
                      })}
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col p-3">
                    <h3 className="text-lg font-bold mb-1 group-hover:text-blue-400 transition-colors">
                      {rel.title}
                    </h3>
                    <span className="mt-auto text-xs text-gray-500 tracking-wide uppercase">
                      Read More &rarr;
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
      {/* <Footer /> */}
    </>
  );
}