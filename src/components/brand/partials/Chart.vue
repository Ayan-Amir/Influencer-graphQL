<template>
  <div class="chartWrapper">
    <div id="chartdiv"></div>
    <span class="text">Specific</span>
    <span class="text right">Broad</span>
  </div>
</template>

<script>
// chart
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default {
  mounted() {
    // create chart
    var chart = am4core.create("chartdiv", am4charts.GaugeChart);
    chart.innerRadius = -15;

    var axis = chart.xAxes.push(new am4charts.ValueAxis());
    axis.min = 0;
    axis.max = 100;
    axis.strictMinMax = true;

    var colorSet = new am4core.ColorSet();

    var gradient = new am4core.LinearGradient();
    gradient.stops.push({ color: am4core.color("#D46F66") });
    gradient.stops.push({ color: am4core.color("#23D439") });
    gradient.stops.push({ color: am4core.color("#A0DF3D") });
    gradient.stops.push({ color: am4core.color("#EBE53F") });

    axis.renderer.line.stroke = gradient;
    axis.renderer.line.strokeWidth = 10;
    axis.renderer.line.strokeLinecap = "round";
    axis.renderer.line.strokeOpacity = 1;

    axis.renderer.grid.template.disabled = true;

    var range0 = axis.axisRanges.create();
    range0.value = 0;
    range0.endValue = 18;

    var range1 = axis.axisRanges.create();
    range1.value = 18;
    range1.endValue = 78;
    var range2 = axis.axisRanges.create();
    range2.value = 78;
    range2.endValue = 93;

    var range3 = axis.axisRanges.create();
    range3.value = 93;
    range3.endValue = 100;

    var hand = chart.hands.push(new am4charts.ClockHand());
    hand.value = 85;
    hand.fill = am4core.color("#5458F7");
    hand.stroke = am4core.color("#5458F7");
  },

  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
};
</script>

<style lang="scss" scoped>
.chartWrapper {
  position: relative;
  @media screen and (max-width: 767px) {
    margin-bottom: rem(20px);
  }
  span.text {
    position: absolute;
    left: 0;
    bottom: 0;
    color: #8998ac;
    font-size: rem(15px);
    &.right {
      left: auto;
      right: 0;
    }
  }
}
#chartdiv {
  padding-top: 15px;
  /deep/ tspan {
    opacity: 0;
    display: none;
  }
  /deep/ g {
    &[opacity="0.3"],
    &[opacity="0.4"] {
      display: none;
      filter: url();
    }
    &[stroke-opacity="0.15"] {
      display: none;
    }
  }
}
</style>
