import sparloop from "sparkloop";

// Initialize the sparkloop
const settings = SETTINGS

const opts = {
  callbacks: {
    ready: function() {
      console.log("Widget is ready inside the package")
      document.querySelector(".alert").removeAttribute("style")
    }
  }
}

sparloop(settings.campaign_id, opts);