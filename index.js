import { State, parseSST } from '@state-street/state-street'
import './output.css'
import { Home } from './components/Home'
import { Projects, Project } from './components/Projects'
import { ShortRow, LinkRow, TitleRow, Description, ShortRowSingle } from './components/Shared'
import { Jobs, Job, Resume } from './components/Resume'

const data = {
    title: "Josh Bracks",
    body: (() => {
        const tabMatch = location.href.match(/#(\w+)/);
        return tabMatch && tabMatch[1] || "Home";
    })()
}

const components = {
    Tab: ({ title, classList, target }) => /*html*/`
    <a class="inline-block p-2 ${classList} no-underline" :click=setBody(target=${target}) href="#${target}">
        ${title}
    </a>
    `,
    Content: () => components[data.body](),
    Home,
    Projects,
    LinkRow,
    TitleRow,
    ShortRow,
    Description,
    Project,
    Job,
    Jobs,
    Resume,
    ShortRowSingle
}

const methods = {
    setBody: ({ target }) => {
        window.scrollTo(0,0)
        data.body = target
    }
}


const TAB_CLASS_LIST = "text-4 hover:text-3 active:text-1 font-big-noodle";
const template = parseSST(/*html*/`
    <div class="absolute top-0 bottom-0 right-0 left-0">
        <div class="flex w-full bg-2 justify-between sticky top-0">
            <div class="flex justify-start">
                <Tab title="{{title}}" target="Home" classList="${TAB_CLASS_LIST} text-lg text-nowrap" />
            </div>
            <div class="flex justify-end">
                <Tab title="Resume" target="Resume" classList="${TAB_CLASS_LIST} text-sm"/>
                <Tab title="Projects" target="Projects" classList="${TAB_CLASS_LIST} text-sm" />
            </div>
        </div>
        <Content/>
    </div>
    `, components);

window.onload = () => {
    new State(template, data, components, methods);
}
