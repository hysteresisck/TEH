import React from "react";
import CMS from "netlify-cms-app";

// Import main site styles as a string to inject into the CMS preview pane
import styles from "!to-string-loader!css-loader!postcss-loader!sass-loader!../css/main.css";

import HomePreview from "./cms-preview-templates/home";
import PostPreview from "./cms-preview-templates/post";
import ProductsPreview from "./cms-preview-templates/HowWeHelp";
import ValuesPreview from "./cms-preview-templates/AboutUs";
import ContactPreview from "./cms-preview-templates/contact";
import ThankPreview from "./cms-preview-templates/thankyou";


CMS.registerPreviewStyle(styles, { raw: true });
CMS.registerPreviewTemplate("home", HomePreview);
CMS.registerPreviewTemplate("post", PostPreview);
CMS.registerPreviewTemplate("HowWeHelp", ProductsPreview);
CMS.registerPreviewTemplate("AboutUs", ValuesPreview);
CMS.registerPreviewTemplate("contact", ContactPreview);
CMS.registerPreviewTemplate("thankyou", ThankPreview);
CMS.init();
