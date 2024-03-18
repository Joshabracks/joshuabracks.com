const ProjectsData = [
    { 
        title: "State Street",
        links: JSON.stringify([
            { href: "https://github.com/Joshabracks/State-Street", name: "github" },
            { href: "https://www.npmjs.com/package/@state-street/state-street", name: "npmjs" },
            { href: "https://discord.gg/87QxqXtg", name: "discord" }
        ]),
        role: "Founder/Designer/Lead Engineer",
        founded: "January 7th, 2024",
        description: [
            /*html*/`State Street is a "lightweight single page application framework". Now, you might be asking the question "Why would you build an SPA Framework when there are already so many perfecdtly good frameworks on the market?". The answer is simpler than you might think: I live in a town where the biggest, most busiest street is named "State" and, while walking down State Street, I thought to myself... "Hey! That would be a neat name for a Single Page Application Framework since they all use some kind of state object!" So I built it.... And here it is. Quite literally, in fact! This web page was built using State Street!`,
            /*html*/`This is an open source project! If you'd like to contribute, report a bug,  keep up with changes and updates or even just join a little developer community, check out our discord.  (link above)`
        ]
    },
    {
        title: "Lycan-db",
        links: JSON.stringify([{href: "https://github.com/Joshabracks/Lycan-DB", name: "github"}]),
        role: "Sole Developer",
        description: [/*html*/`This is an older project that I'm still kind of proud of but also somewhat apalled with. LycanDB is an noSQL database for node.js that I attempted and never finished to port to Python. It is one of my earliest projects as a developer, so the code is pretty difficult to read, however, the fact that I did manage to build some practice sites using a script that I knocked out in about two weeks when fresh out of coding bootcamp is worth a pat on the back. Given some time, I'd like to revisit this project, attempt to clean it up and probably rewrite the entire thing for the fun of it. Until then, I'm happy with Mongo and SQL or whatever else I have to learn depending on what jobs I take.`]
    },
    {
        title: "Society-4",
        role: "Founder/Lead Engineer",
        description: [/*html*/`There's not a lot that I can say about this project other than it a rather large in scope Chrome Extensionand Web Application that is "coming soon"`]
    },
    {
        title: "Recurring",
        links: JSON.stringify([{href: "https://joshabracksgmailcom.itch.io/recurring", name: "itch.io"}]),
        role: "Game Designer/Programmer/Artist",
        description: [/*html*/`This ugly little game is the result of a 1-week game jam where I only had time to work on the jam during theweekend in the middle (so it was more like a 2 day jam for me) due to having a full time job. It's a funnylittle twin stick shooter with dumb "zombie" ai, some neat little powerups and a very vague goal. Oh.. Andall of the enemies and levels are procedurally generated.`]
    }
]

const Project = ({ title, links, role, founded, description }) => {
    const result = /*html*/`
    <div class="hover:bg-2 hover:text-white p-5 rounded duration-200">
        <TitleRow title="${title}"/>
        <LinkRow links="${links}"/>
        <ShortRow key="Role" value="${role}"/>
        <ShortRow key="Founded" value="${founded}"/>
        <Description paragraphs="${description}"/>
    </div>
`;
    return result
}

const Projects = () => {
    const projectsString = ProjectsData.reduce((result, project) => {
        result.push(/*html*/`
        <Project title="${project.title}" links="${project.links || ''}" role="${project.role || ''}" founded="${project.founder || ''}" description="${JSON.stringify(project.description)}"/>
        `);
        return result;
    }, []).join('<br />');

    return /*html*/`
    <div class="whitespace-break-spaces w-full text-center text-4 font-sans flex flex-col items-center">
        <div class="min-w-50% max-w-[750px] text-justify p-5">
            ${(projectsString)}
        </div>
    </div>
    `;
}

export {
    Projects,
    Project,
    ProjectsData 
}