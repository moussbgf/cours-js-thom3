class controller {
    constructor ($interval) {
        this.$interval = $interval;
    }

    $onChanges (changes) {
        if (changes.time && changes.time.currentValue) {
            if (this.timer) this.$interval.cancel(this.timer);
            this.timer = this.$interval(() => {
                this.time--;
                if (this.time === 0) this.$interval.cancel(this.timer);
            }, 1000);
        }
    }
}

const template = `
<span class="badge">{{ $ctrl.time }}</span>
`;

export let CountdownComponent = {
    controller,
    template,
    bindings: {
        time: '<',
        onEnd: '&',
        onStart: '&'
    }
};
