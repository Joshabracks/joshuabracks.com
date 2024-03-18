const RESUME_DATA = [
    {
        title: "Lead Software Engineer",
        company: "ReUpp",
        dateRange: "May 2023 - Current",
        description: JSON.stringify([
            '● Full ownership of entire tech stack (Python/Chalice, Node.js/React, AWS)',
            '● Redesigned existing architecture to allow for streamlined development approach',
            '● Integrated affiliate network tagging as well as standards for fast custom integration of affiliate retail clients',
            '● Fixed existing domain issues via proper DNS configurations',
            '● Streamlined integration process through custom in-house tooling',
            '● Integration and technical support for new and existing clients',
            '● Implemented software deployment automation via CI/CD pipelines',
        ])
    },
    {
        title: "Software Engineer",
        company: "Honey/PayPal",
        dateRange: "Feb 2020 - March 2023",
        description: JSON.stringify([
            '● Led the implementation process and tooling for migrating 50,000+ custom JavaScript website integrations to a Chrome MV3 compliant solution within a strict deadline, saving 98% of functionality and revenue.',
            '● Developed core systems and internal tooling in JavaScript/node.js, expanding existing internal API functionality.',
            '● Built pattern recognition software and trained/managed a team in implementing and expanding its use.',
            '● Authored technical guides and documentation, and conducted peer code reviews.',
            '● Expanded an in-house “mixin” language, implementing best practices and distilling thousands of unique software integrations into approximately 20 easy to manage templates.',
            '● Developed data mutation models for internal data pipeline, including data validations and string manipulation and sanitization utilizing Scala, Scio/Spark, GCP, and Pub-sub',
            '● Integrated e-commerce websites using custom JavaScript web scraping techniques, API scraping models, and automated web purchasing pipelines.',
            '● Trained, mentored and interviewed new team members.',
            '● Developed web discovery tools for internal use.',
        ])
    }
]

const Job = ({ company, title, description, dateRange, classList }) => {
    return /*html*/`
    <div class="${classList}">
        <TitleRow title="${title}"/>
        <div class="p-5">
            <ShortRowSingle message="${company}"/>
            <ShortRowSingle message="${dateRange}"/>
            <Description paragraphs="${description}"/>
        <div>
    <div>
    `
}

const Jobs = () => RESUME_DATA.reduce((result, job) => {
    result += /*html*/`<Job classList="hover:bg-2 hover:text-white p-5 rounded duration-200" company="${job.company}" title="${job.title}" description="${job.description}" dateRange="${job.dateRange}"/>`
    return result;
}, '')

const Resume = () => /*html*/`
    <div class="whitespace-break-spaces w-full text-center text-4 font-sans flex flex-col items-center">
        <div class="min-w-50% max-w-[750px] text-justify p-5">
            <Jobs />
        </div>
    </div>
`;

export { Resume, Jobs, Job }