import { createStore } from 'vuex';

import api from '../services/api';

interface GithubJobResponse {
  id: string;
  location: string;
  company: string;
  company_logo?: string;
  type: string;
  title: string;
  created_at: string;
}

interface Job {
  id: string;
  logo?: string;
  company: string;
  position: string;
  type: string;
  location: string;
  createdAt: string;
}

interface Queries {
  description: string;
  location: string;
  full_time: boolean;
}

interface Query {
  name: keyof Queries;
  value: Queries[keyof Queries];
}

interface UpdateQueriesOptions {
  query: Query;
  cancelJobsRequest?: boolean;
}

interface Store {
  jobs: Job[];
  queries: Queries;
}

export default createStore<Store>({
  state: {
    jobs: [],
    queries: {
      description: '',
      location: '',
      full_time: true,
    },
  },
  mutations: {
    setJobs(state, jobs: Job[]) {
      state.jobs = jobs;
    },
    setQuery(state, query: Query) {
      state.queries[query.name] = query.value as never;
    },
  },
  actions: {
    async requestJobs({ state, commit }) {
      const { data } = await api.get<GithubJobResponse[]>('', {
        params: state.queries,
      });

      const jobs = data.map((job) => ({
        id: job.id,
        logo: job.company_logo,
        company: job.company,
        position: job.title,
        type: job.type,
        location: job.location,
        createdAt: job.created_at,
      }));

      commit('setJobs', jobs);
    },
    updateQuery({ commit, dispatch }, options: UpdateQueriesOptions) {
      commit('setQuery', options.query);

      if (options.cancelJobsRequest) return;

      dispatch('requestJobs');
    },
  },
});
