$(document).ready(function() {
$(".example.stopwatch").TimeCircles({
    count_past_zero: false,
    "animation": "smooth",
    "bg_width": 1.7,
    "fg_width": 0.05,
    "circle_bg_color": "#60686F",
    "time": {
        "Days": {
            "text": "Days",
            "color": "#FFCC66",
            "show": false
        },
        "Hours": {
            "text": "Hours",
            "color": "#99CCFF",
            "show": false
        },
        "Minutes": {
            "text": "Minutes",
            "color": "#BBFFBB",
            "show": false
        },
        "Seconds": {
            "text": "Seconds",
            "color": "#FF9999",
            "show": true
        }
    }
  });
});
