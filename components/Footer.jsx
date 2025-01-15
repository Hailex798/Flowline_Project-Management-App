"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FooterThree() {
  return (
    <footer className="bg-[#0f0316] pt-9 py-5 px-5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo Section */}
          <div className="space-y-6">
            <Link href="#header">
              <motion.h2
                className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={"/essentials/footer-logo.png"}
                  alt="FlowLine Logo"
                  height={76}
                  width={100}
                  className="h-9 w-auto object-contain"
                />
              </motion.h2>
            </Link>
            <p>Shaping the future of web development</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="w-full border-2 rounded-full py-2 px-4 outline-none transition-all duration-300"
              />
              <button className="absolute right-1 top-2 rounded-full p-1 transition-colors duration-300">
                <ArrowUpRight className="size-4" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Projects", "Blog", "Contact"].map(
                (item) => (
                  <motion.li
                    key={item}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-black dark:text-white transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </motion.li>
                )
              )}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              {[
                { name: "LinkedIn", url: "https://www.linkedin.com/in/kshitijsinghbisht" },
                { name: "Twitter", url: "https://x.com/stoickshitij" },
                { name: "Instagram", url: "https://www.instagram.com/kshitij_izh/" },
                { name: "GitHub", url: "https://github.com/Hailex798/" },
              ].map((item) => (
                <motion.li
                  key={item.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="dark:text-white text-black transition-colors duration-300 flex items-center"
                  >
                    {item.name}
                    <ArrowUpRight className="w-4 h-4 ml-1" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Vision Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Our Vision</h3>
            <p>
              Pioneering the next generation of web experiences through
              innovative code and cutting-edge design.
            </p>
            <div className="flex space-x-4">
              <motion.div
                className="w-2 h-2 bg-blue-500 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              />
              <motion.div
                className="w-2 h-2 bg-purple-500 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
              />
              <motion.div
                className="w-2 h-2 bg-pink-500 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: 1 }}
              />
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300 text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300 text-sm"
            >
              Terms of Service
            </a>
            <a
              href="https://kshitijsinghbisht.netlify.app/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#b641ff] transition-colors duration-300 text-sm"
            >
              🧑‍💻Kshitij Singh Bisht
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
