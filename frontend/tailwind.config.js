module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        customlight: {
          // Base colors
          "base-100": "#f9f8f6",       // oklch(98% 0.016 73.684)
          "base-200": "#f3f1ec",       // oklch(96% 0.015 12.422)
          "base-300": "#e1dcd4",       // oklch(90% 0.076 70.697)
          "base-content": "#5d554a",   // oklch(40% 0.123 38.172)

          // Primary colors
          primary: "#52403c",          // oklch(45% 0.187 3.815)
          "primary-content": "#f7f3f9",// oklch(97% 0.014 308.299)

          // Secondary
          secondary: "#cc66dd",        // oklch(70% 0.183 293.541)
          "secondary-content": "#502353", // oklch(28% 0.141 291.089)

          // Accent
          accent: "#7da7ff",           // oklch(74% 0.16 232.661)
          "accent-content": "#404969", // oklch(29% 0.066 243.157)

          // Neutral
          neutral: "#4b3934",          // oklch(40% 0.153 2.432)
          "neutral-content": "#fbf9f2",// oklch(98% 0.026 102.212)

          // Info / Success / Warning / Error
          info: "#6a38cc",             // oklch(38% 0.189 293.745)
          "info-content": "#f5f1fb",   // oklch(97% 0.014 254.604)

          success: "#3fc585",          // oklch(59% 0.145 163.225)
          "success-content": "#f0fdf6",// oklch(97% 0.021 166.113)

          warning: "#f6c344",          // oklch(66% 0.179 58.318)
          "warning-content": "#fefae8",// oklch(98% 0.022 95.277)

          error: "#dc4f4f",            // oklch(59% 0.249 0.584)
          "error-content": "#fff1f2",  // oklch(97% 0.014 343.198)
        },
      },
    ],
  },
};
