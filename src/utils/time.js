//formatHms: (t, delimit=':') ->
//    d = moment.duration(Math.floor(t), 'seconds')
//h = Math.floor d.asHours()
//m = Math.floor(d.asMinutes()) - 60 * h
//s = Math.floor(d.asSeconds()) - 3600 * h - 60 * m
//s = '0' + s if s < 10
//    # Pad minutes if > 1 hour
//if h > 0
//    m = '0' + m if m < 10
//    formatted = "#{m}#{delimit}#{s}"
//# Add hours if > 0
//if h > 0
//    formatted = "#{h}#{delimit}#{formatted}"
//formatted

import moment from 'moment';

export const prettyFormatTime = (t) => {
    let d = moment.duration(Math.floor(t), 'seconds');
    let h = Math.floor(d.asHours());
    let m = Math.floor(d.asMinutes() - 60 * h);
    let s = Math.floor(d.asSeconds() - 3600 * h - 60 * m);

    if (s < 10) {
        s = '0' + s;
    }

    if (h > 0 && m < 10) {
        m = '0' + m;
    }
    let formatted = `${m}:${s}`;

    if (h > 0) {
        formatted = `${h}:${formatted}`;
    }
    return formatted;
};