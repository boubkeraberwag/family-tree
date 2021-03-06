import * as d3 from 'd3';
export class Link implements d3.SimulationLinkDatum<Node> {
  // must - defining enforced implementation properties
  source: Node ;
  target: Node ;

  constructor(source, target) {
    this.source = source;
    this.target = target;
  }
}
