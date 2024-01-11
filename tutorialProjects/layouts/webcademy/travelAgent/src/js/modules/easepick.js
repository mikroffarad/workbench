import { easepick } from '@easepick/core';
import { TimePlugin } from '@easepick/time-plugin';

function easepickFunc() {
    const picker = new easepick.create({
        element: document.getElementById('datepicker'),
        css: [
            'https://cdn.jsdelivr.net/npm/@easepick/core@1.2.1/dist/index.css',
            'https://cdn.jsdelivr.net/npm/@easepick/time-plugin@1.2.1/dist/index.css',
        ],
        plugins: [TimePlugin],
        format: "HH:mm, DD/MM/YY"
    });
}

export default easepickFunc;
