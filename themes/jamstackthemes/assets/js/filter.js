var mixer = mixitup('.grids', {
  multifilter: {
    enable: true // enable the multifilter extension for the mixer
  },
  animation: {
    enable: false,
    duration: 500,
    nudge: true,
    reverseOut: false,
    effects: "fade scale"
  },
  selectors: {
    target: '.grid'
  },
  callbacks: {
    onMixStart: function(state, futureState) {
      let total = futureState.totalShow;
      let count = document.querySelector('.count-number');
      count.textContent = total
    }
  }
});