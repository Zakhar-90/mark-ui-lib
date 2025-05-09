import { TabsProps } from "../types/types";

export class Tabs {
    private root: HTMLElement
    private tabs: TabsProps[]
    private tabsElem: HTMLElement[]

    constructor(root: HTMLElement, tabs: TabsProps[]) {
        this.root = root
        this.tabs = tabs
        this.tabsElem = []

        this.init();
    }

    private init() {
        const divTabs = document.createElement('div')
        divTabs.classList.add('tabs')

        const divTabContent = document.createElement('div')
        divTabContent.classList.add('tab-content')

        this.tabs.forEach((tab, indx) => {
            const nameTab = document.createElement('div')
            nameTab.setAttribute('data-tab', `${indx + 1}`)
            nameTab.classList.add('tab')
            nameTab.textContent = tab.tab
            divTabs.append(nameTab)
            nameTab.addEventListener('click', () => this.selectTab(nameTab))
            this.tabsElem.push(nameTab)

            tab.content.id = `${indx + 1}`
            tab.content.classList.add('content')
            divTabContent.append(tab.content)

        });

        if (this.tabs.length > 0) {
            this.selectTab(this.tabsElem[0]);
        }

        this.root?.append(divTabs, divTabContent)
    }

    private selectTab(tab: Element) {
        const tabId = tab.getAttribute('data-tab');

        this.tabs.forEach(t => t.content.classList.remove('active'));
        this.tabsElem.forEach(t => t.classList.remove('active'));

        tab.classList.add('active');
        
        if (tabId) {
            this.tabs[+tabId - 1].content.classList.add('active')
        }
    }
}