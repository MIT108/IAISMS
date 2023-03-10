/*!

=========================================================
* Argon Dashboard React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/Auth/Register.js";
import Login from "views/Auth/Login.js";
import Tables from "views/examples/Tables.js";
import Icons from "views/examples/Icons.js";
import AppAdminConcourDashboard from "views/AppAdminDashboard/AppAdminConcourDashboard.js";
import AppAdminDashboard from "views/AppAdminDashboard/AppAdminConcourDashboard.js";
import AppAdminSettings from "views/AppAdminDashboard/AppAdminSettings.js";
import AppAdminCandidateDashboard from "views/AppAdminDashboard/AppAdminCandidateDashboard.js";
import AppAdminPersonnel from "views/AppAdminDashboard/AppAdminPersonnel.js";

var routes = [{
        path: "/index",
        name: "Dashboard",
        icon: "ni ni-tv-2 text-primary",
        component: Index,
        layout: "/admin"
    },
    {
        path: "/icons",
        name: "Icons",
        icon: "ni ni-planet text-blue",
        component: Icons,
        layout: "/admin"
    },
    {
        path: "/maps",
        name: "Maps",
        icon: "ni ni-pin-3 text-orange",
        component: Maps,
        layout: "/admin"
    },
    {
        path: "/user-profile",
        name: "User Profile",
        icon: "ni ni-single-02 text-yellow",
        component: Profile,
        layout: "/admin"
    },
    {
        path: "/tables",
        name: "Tables",
        icon: "ni ni-bullet-list-67 text-red",
        component: Tables,
        layout: "/admin"
    },
    {
        path: "/login",
        name: "Login",
        icon: "ni ni-key-25 text-info",
        component: Login,
        layout: "/auth"
    },
    {
        path: "/register",
        name: "Register",
        icon: "ni ni-circle-08 text-pink",
        component: Register,
        layout: "/auth"
    },
    {
        path: "/index",
        name: "Admin Dashboard",
        icon: "ni ni-tv-2 text-primary",
        component: AppAdminDashboard,
        layout: "/app-admin"
    },
    {
        path: "/personnel",
        name: "Manage Personnel",
        icon: "ni ni-single-02",
        component: AppAdminPersonnel,
        layout: "/app-admin"
    },
    {
        path: "/concour",
        name: "Manage Concour",
        icon: "ni ni-paper-diploma",
        component: AppAdminConcourDashboard,
        layout: "/app-admin"
    },
    {
        path: "/candidates",
        name: "Manage Candidates",
        icon: "ni ni-single-02",
        component: AppAdminCandidateDashboard,
        layout: "/app-admin"
    },
    {
        path: "/settings",
        name: "Settings",
        icon: "ni ni-settings",
        component: AppAdminSettings,
        layout: "/app-admin"
    },

];
export default routes;