import { create } from 'zustand'

export const useFeatureStore = create((set)=>({
  inViewFeature: null,
  setInViewFeature: (feature) => set({inViewFeature: feature}),
  fullScreenFeature: null,
  setFullScreenFeature: (feature) => set({fullScreenFeature: feature}),
}))

// import { create } from 'zustand';

// const useFeatureStore = create((set) => ({
//   inViewFeature: null,
//   setInViewFeature: (id) => set({ inViewFeature: id }),
//   fullScreenFeature: null,
//   setFullscreenFeature: (id) => set({ fullScreenFeature: id }),
// }));

// export { useFeatureStore };
