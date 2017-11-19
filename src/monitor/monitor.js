class Monitor {
    constructor() {
        this.events = {};
        this.listen = this.listen.bind(this);
        this.trigger = this.trigger.bind(this);
    }
    listen(key, fn) {
        if (!typeof key === 'string' || !typeof fn === 'function') {
            throw Error('监听事件参数错误');
        }
        if (!this.events[key]) {
            // 事件注册
            this.events[key] = [];
        }
        this.events[key].push(fn);
    }
    trigger(...args) {
        const key = args[0];
        const extraArgs = [].slice.call(args, 1);

        (this.events[key] || []).forEach((item) => {
            item(...extraArgs);
        });
    }
}

export default Monitor;
