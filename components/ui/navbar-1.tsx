"use client"

import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Menu, X } from "lucide-react"

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <div className="flex justify-center w-full py-6 px-4">
      <div className="flex items-center justify-between px-6 py-3 bg-background border border-border rounded-full shadow-sm w-full max-w-3xl relative z-10">
        <div className="flex items-center gap-2.5">
          <motion.div
            className="w-8 h-8 shrink-0"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.3 }}
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="7" fill="#0A0A0A"/>
              <rect x="8" y="8" width="3" height="16" rx="1.5" fill="white"/>
              <rect x="21" y="8" width="3" height="16" rx="1.5" fill="white"/>
              <rect x="8" y="13.5" width="16" height="5" rx="1.5" fill="white"/>
            </svg>
          </motion.div>
          <span className="text-sm font-bold tracking-widest uppercase text-foreground">
            HELIX
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-8">
          {["Product", "Use Cases", "Pricing", "Docs"].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <a href="#" className="text-sm text-foreground hover:text-muted-foreground transition-colors font-medium">
                {item}
              </a>
            </motion.div>
          ))}
        </nav>

        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <a
            href="#"
            className="inline-flex items-center justify-center px-5 py-2 text-sm text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-colors"
          >
            Reserve a Unit
          </a>
        </motion.div>

        <motion.button className="md:hidden flex items-center" onClick={toggleMenu} whileTap={{ scale: 0.9 }}>
          <Menu className="h-6 w-6 text-foreground" />
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-background z-50 pt-24 px-6 md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button
              className="absolute top-6 right-6 p-2"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <X className="h-6 w-6 text-foreground" />
            </motion.button>
            <div className="flex flex-col space-y-6">
              {["Product", "Use Cases", "Pricing", "Docs"].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <a href="#" className="text-base text-foreground font-medium hover:text-muted-foreground transition-colors" onClick={toggleMenu}>
                    {item}
                  </a>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                exit={{ opacity: 0, y: 20 }}
                className="pt-6"
              >
                <a
                  href="#"
                  className="inline-flex items-center justify-center w-full px-5 py-3 text-base text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-colors"
                  onClick={toggleMenu}
                >
                  Reserve a Unit
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export { Navbar1 }
