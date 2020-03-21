import ExampleComponent from "./components/ExampleComponent";
import Example2 from "./components/Example2";
import VueRouter from "vue-router";

const routes = [
    {
        path: "/",
        component: ExampleComponent,
        name: "home"
    },
    {
        path: "/second",
        component: Example2,
        name: "second"
    }
];

const router = new VueRouter({
    mode: "history",
    routes
});

export default router;
