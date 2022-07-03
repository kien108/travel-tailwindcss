module.exports = {
   darkMode: "class",
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      extend: {
         colors: {
            primary: "var(--primary-color)",
            "txt-main": "var(--txt-main-color)",
            "txt-second": "var(--txt-second-color)",
            main: "var(--bg-main-color)",
            card: "#1e293b",
         },
         backgroundImage: {
            gradient: "var(--bg-gradient-color)",
         },
         fontSize: {
            xxl: "var(--xxl)",
            xl: "var(--xl)",
            l: "var(--l)",
            md: "var(--md)",
            sm: "var(--sm)",
            13: "13px",
            14: "14px",
            16: "16px",
            20: "20px",
            26: "26px",
            24: "24px",
            32: "32px",
            36: "36px",
            48: "48px",
         },
         fontFamily: {
            pop: "Poppins",
            sen: "Sen",
         },
         boxShadow: {
            md: "6px 6px 16px 0 var(--primary-color),-4px -4px 12px 0 rgba(255, 255, 255, 0.3);",
         },
      },
   },
   plugins: [
      function ({ addComponents }) {
         addComponents({
            ".container": {
               width: "100%",
               maxWidth: "1200px",
               padding: "0 15px",
            },
         });
      },

      // function ({ addComponents }) {
      //    addComponents({
      //      '.container': {
      //        maxWidth: '100%',
      //        '@screen sm': {
      //          maxWidth: '600px',
      //        },
      //        '@screen md': {
      //          maxWidth: '700px',
      //        },
      //        '@screen lg': {
      //          maxWidth: '800px',
      //        },
      //        '@screen xl': {
      //          maxWidth: '900px',
      //        },
      //      }
      //    })
      //  }
   ],

   corePlugins: {
      container: false,
   },
};
