(function (e) {
    e.widget("custom.multipleSliderRanges", $.ui.slider, {
        _createRange: function() {
            var start;
            var unitWidth = 100/(this.options.max - this.options.min);
            for(var r = 0; r < this.options.ranges; r++) {
                start = 2*r;
                this.element.append('<div class="ui-slider-range ui-widget-header range' + r + '" style="left: ' + (this.options.values[start] - this.options.min) * unitWidth + '%; width: ' + (this.options.values[start+1]-this.options.values[start]) * unitWidth + '%;"></div>');
            }
        },
        _msrSlide: function(event, ui) {
            var r, start, unitWidth;
            for(r = 0; r < this.options.ranges*2; r++) {
                if(ui.values[r] >= ui.values[r+1]) {
                    return false;
                }
            }
            unitWidth = 100/(this.options.max - this.options.min);
            for(r = 0; r < this.options.ranges; r++) {
                start = 2*r;
                this.element.find(".range" + r).css({"left": (ui.values[start] - this.options.min) * unitWidth + "%", "width": (ui.values[start+1] - ui.values[start]) * unitWidth + "%"});
            }
            return true;
        },
        _trigger: function(e, i, s) {
            if(e == "slide" && !this._msrSlide(i, s)) return false;
            this._superApply( arguments );
        }
    });
})(jQuery);
