import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock } from "lucide-react";

// Import blog images
import blogParabens from "@/assets/blog-parabens.jpg";
import blogFoodLabels from "@/assets/blog-food-labels.jpg";
import blogBabyProducts from "@/assets/blog-baby-products.jpg";

const blogPosts = [
  {
    id: "understanding-parabens",
    title: "Understanding Parabens: What You Need to Know",
    excerpt:
      "Parabens are common preservatives found in cosmetics and skincare. Learn about their safety profile and how to identify them on labels.",
    category: "Ingredient Safety",
    image: blogParabens,
    readTime: "5 min read",
    date: "Dec 10, 2025",
  },
  {
    id: "reading-food-labels",
    title: "How to Read Food Labels Like a Pro",
    excerpt:
      "Master the art of decoding nutrition labels. Understand hidden sugars, sodium content, and what those E-numbers really mean.",
    category: "Product Analysis",
    image: blogFoodLabels,
    readTime: "7 min read",
    date: "Dec 8, 2025",
  },
  {
    id: "baby-safe-products",
    title: "Choosing Safe Products for Your Baby",
    excerpt:
      "A parent's guide to identifying harmful ingredients in baby products and finding safer alternatives for your little one.",
    category: "Health Awareness",
    image: blogBabyProducts,
    readTime: "6 min read",
    date: "Dec 5, 2025",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 lg:mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-foreground text-xs sm:text-sm font-medium mb-5">
            Knowledge Hub
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
            Learn About
            <span className="text-primary block mt-1">Ingredient Safety</span>
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with expert insights on product ingredients, health tips, and how to make safer choices for you and your family.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group"
            >
              <Link to={`/blog/${post.id}`} onClick={() => window.scrollTo(0, 0)} className="block">
                <div className="bg-secondary/60 rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all duration-400">
                  {/* Image */}
                  <div className="h-40 sm:h-44 overflow-hidden relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5">
                    <span className="px-2.5 py-1 rounded-full bg-background border border-border text-foreground text-xs font-medium">
                      {post.category}
                    </span>

                    <h3 className="mt-3 text-base sm:text-lg font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>

                    <p className="mt-2 text-muted-foreground text-sm line-clamp-2">{post.excerpt}</p>

                    <div className="flex items-center justify-between pt-4 mt-4 border-t border-border/50">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            to="/blog"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary border border-border hover:border-primary/50 text-foreground font-medium transition-all duration-300 hover:shadow-lg"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
