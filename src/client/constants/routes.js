export const URL = {
    PROJECT_DETAIL:"project",
    PROJECT_LISTING:"projects",
    SIGN_OUT: "logout"
};

export default {
    DEFAULT : `/`,
    PROJECT_DETAIL: `/${URL.PROJECT_DETAIL}/:projectId`,
    PROJECT_LISTING: `/${URL.PROJECT_LISTING}`,
    SIGN_OUT:`/${URL.SIGN_OUT}`,
    PAGE_NOT_FOUND: `*`
};
