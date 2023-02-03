export const sidebarData = [
    {
        "display_name": "Search Filter",
        "route": "/",
        "icon": "bx bx-search-alt"
    },
    {
        "display_name": "Registration Form",
        "route": "/form",
        "icon": "bx bx-user-pin"
    },
    {
        "display_name": "Quiz App",
        "route": "/quiz",
        "icon": "bx bx-package"
    },
]


export const signUpInputs = [
    {
        id: 1,
        name: "userName",
        type: "text",
        placeholder: "Username...",
        errorMessage:
            "Username should be 3-16 characters and shouldn't include any special character!",
        label: "Username",
        pattern: /^[A-Za-z0-9]{3,16}$/i,
        iconName: 'bx bx-user',
        iconExit: 'bx bx-x',
        error: 'exitsUser',
        required: true,
    },
    {
        id: 2,
        name: "email",
        type: "email",
        placeholder: "Email...",
        errorMessage: "It should be a valid email address!",
        label: "Email",
        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        iconName: 'bx bx-envelope',
        iconExit: 'bx bx-x',
        error: 'exitsEmail',
        required: true,
    },
    {
        id: 3,
        name: "password",
        type: "password",
        placeholder: "Password...",
        errorMessage:
            "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
        label: "Password",
        pattern: /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/i,
        iconName: 'bx bx-lock-alt',
        iconExit: 'bx bx-x',
        required: true,
    },
];


export const signInInputs = [
    {
        id: 9,
        name: "username",
        type: "text",
        placeholder: "Username",
        errorMessage:
            "Incorrect username",
        label: "Username",
        // pattern: inputValue.username,
        icon: 'bx bx-user',
        required: true,
    },
    {
        id: 10,
        name: "password",
        type: "password",
        placeholder: "Password",
        errorMessage: "Incorrect password",
        label: "Password",
        // pattern: inputValue.password,
        icon: 'bx bx-lock-alt',
        required: true,
    },
];


export const social_media = [
    {
        id: 10,
        href: 'facebook.com',
        icon: 'bx bxl-facebook'
    },
    {
        id: 11,
        href: 'twitter.com',
        icon: 'bx bxl-twitter'
    },
    {
        id: 12,
        href: 'google.com',
        icon: 'bx bxl-google'
    },
    {
        id: 13,
        href: 'linkedin.com',
        icon: 'bx bxl-linkedin'
    }
]