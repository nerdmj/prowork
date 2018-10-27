export const URL = {
    PROJECT_DETAIL:"project",
    PROJECT_LISTING:"projects",
};

export default {
    DEFAULT : `/`,
    PROJECT_DETAIL: `/${URL.PROJECT_DETAIL}/:projectId`,
    PROJECT_LISTING: `/${URL.PROJECT_LISTING}`,
    PAGE_NOT_FOUND: `/*`
};
