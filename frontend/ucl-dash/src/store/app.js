const getDefaultState = () => {
    return {
        items: {}
    }
}

const modules = {
};

const state = getDefaultState();

const mutations = {
    UPDATE_DETAIL(state, item) {
        state.items = item;
    }
};

const actions = {
    addDashboardDetail(state, item) {
        console.log("addDashboardDetail:", item);
        state.commit('UPDATE_DETAIL', item);
    }
};

const getters = {
    studentName: (state) => {
        return state.items.student;
    },
    studentTimetable: (state) => {
        const timetable = state.items.timetable;
        if (timetable === undefined) {
            return null;
        } else {
            return timetable
        }
    },
    studentNote: (state) => {
        return state.items.student;
    }

}

export default {
    namespaced: true,
    modules,
    state,
    mutations,
    actions,
    getters
}