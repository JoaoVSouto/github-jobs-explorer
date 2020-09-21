import { createStore } from 'vuex';
import chunk from 'lodash.chunk';

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

interface Store {
  jobs: Job[];
  MAX_JOBS_PER_PAGE: number;
  isJobsLoading: boolean;
  queries: Queries;
}

export default createStore<Store>({
  state: {
    jobs: [],
    MAX_JOBS_PER_PAGE: 5,
    isJobsLoading: false,
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
    setLoading(state, loading: boolean) {
      state.isJobsLoading = loading;
    },
  },
  actions: {
    async requestJobs({ state, commit }) {
      commit('setLoading', true);

      try {
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
      } catch {
        commit('setJobs', []);
      } finally {
        commit('setLoading', false);
      }
    },
    updateQuery({ commit, dispatch }, query: Query) {
      commit('setQuery', query);

      dispatch('requestJobs');
    },
    updateQueries({ commit, dispatch }, queries: Query[]) {
      queries.forEach((query) => {
        commit('setQuery', query);
      });

      dispatch('requestJobs');
    },
  },
  getters: {
    jobsSplitted(state) {
      return chunk(state.jobs, state.MAX_JOBS_PER_PAGE);
    },
    pagesQuantity(state) {
      return Math.ceil(state.jobs.length / state.MAX_JOBS_PER_PAGE);
    },
  },
});
