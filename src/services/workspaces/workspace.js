import _  from "lodash";

export class Workspace {

    constructor(section, viewmodel, id) {
        this.section = section;
        this.viewModel = viewmodel;
        this.id = id;
        this.isActive = true;
        this.href = "#/shell/" + section + "/" + viewmodel + "/" + id;
        this.key = "KEY-" + section + "-" + viewmodel + "-" + id;

    }


}

export class Workspaces {

    constructor() {
        this.workSpaces = [];


    }

    addWorkspace(section, viewmodel, id) {


        let newWorkspace = new Workspace(section, viewmodel, id);
        let existingWorkspace = _.find(this.workSpaces, function (x) { return x.key == newWorkspace.key; });

        for (let item of this.workSpaces) {
            item.isActive = false;
        }

        if (existingWorkspace) {

            existingWorkspace.isActive = true;
        } else {

            this.workSpaces.push(newWorkspace);
        }

    }

}

