$(document).ready(function() {
$("#DateCountdown").TimeCircles({
    "animation": "smooth",
    "bg_width": 1.2,
    "fg_width": 0.06666666666666667,
    "circle_bg_color": "#60686F",
    "time": {
        "Days": {
            "color": "#ff6b66",
            "show": true,
            "text": "Dias",
        },
        "Hours": {
            "text": "Hours",
            "color": "#ffcb99",
            "show": true
        },
        "Minutes": {
            "text": "Minutes",
            "color": "#fff5bb",
            "show": true
        },
        "Seconds": {
            "text": "Seconds",
            "color": "#d6ff99",
            "show": true
        }
    }
});
$("#DateCountdowndos").TimeCircles({
    "animation": "smooth",
    "bg_width": 2.4,
    "fg_width": 0.03,
    "circle_bg_color": "#60686F",
    "time": {
        "Days": {
            "text": "Days",
            "color": "#66ffe1",
            "show": true
        },
        "Hours": {
            "text": "Hours",
            "color": "#99aeff",
            "show": true
        },
        "Minutes": {
            "text": "Minutes",
            "color": "#fcbbff",
            "show": true
        },
        "Seconds": {
            "text": "Seconds",
            "color": "#ff9999",
            "show": true
        }
    }
});
});
