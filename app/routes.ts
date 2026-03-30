import {
  type RouteConfig,
  index,
  route,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  layout("routes/layouts/home.tsx", [index("routes/home/index.tsx")]),
  layout("routes/layouts/main.tsx", [
    route("about", "./routes/about/index.tsx"),
    route("contact", "./routes/contact/index.tsx"),
    ...prefix("projects", [
      index("./routes/projects/index.tsx"),
      route(":id", "./routes/projects/details.tsx"),
    ]),
    ...prefix("blog", [
      index("./routes/blog/index.tsx"),
      route(":slug", "./routes/blog/details.tsx"),
    ]),
    route("*", "./routes/errors/not-found.tsx"),
  ]),
] satisfies RouteConfig;
