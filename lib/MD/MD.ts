class MD {
  writeMD(agent: string, map: string): string {
    return `# ValoRandom Markdown Page
This is a Markdown file that can be generated from this project by running the markdown script.
        
## Agent
        
Your selected agent is ${agent}
        
## Map
        
Your selected map is ${map}`;
  }
}

export default MD;
