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
    studentDetail: (state) => {
        return state.items.student;
    },
    cartValueWithoutVat: (state) => {
        let res = 0;
        state.items.map(item => {
            res += (item.price - item.discount) * item.quantity;
        });
        return roundToTwoDecimalPlaces(res);
    },
    vatValue: (state) => {
        let res = 0;
        state.items.map(item => {
            res += (item.price - item.discount) * item.quantity;
        });

        const vatResult = res * (Number(process.env.VUE_APP_THAI_VAT) / 100);
        return roundToTwoDecimalPlaces(vatResult);
    },
    cartValueWithVat: (state) => {
        let res = 0;
        state.items.map(item => {
            res += (item.price - item.discount) * item.quantity;
        });

        const resWithVat = res * ((Number(process.env.VUE_APP_THAI_VAT) / 100) + 1);
        return roundToTwoDecimalPlaces(resWithVat);
    },
    cartNumItems: (state) => {
        let res = 0;
        state.items.map(item => {
            res +=  item.quantity;
        });
        return res;
    },
}

export default {
    namespaced: true,
    modules,
    state,
    mutations,
    actions,
    getters
}