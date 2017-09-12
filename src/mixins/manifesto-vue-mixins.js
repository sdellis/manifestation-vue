/* eslint-disable camelcase */
import { normalize, schema } from 'normalizr'

const ManifestoVueMixins = {

  hello: function () {
    console.log('hello!')
  },

  getEnglishTitle: function () {
    var title = this.getLabel()
    return title[0].value
  },

  mainSequence: function () {
    // mainSequence is the one without an id (not ideal since it could have an id)
    const s = this.getSequences()
    const main_sequence = s.filter((seq) => seq.id !== 'undefined')
    return main_sequence[0]
  },

  getCanvasMainThumb: function (canvas) {
    const images = canvas.getImages()
    const services = images[0].getResource().getServices()
    return services[0].id + '/full/400,/0/default.jpg'
  },

  getCanvasCode: function (canvas_id) {
    const arr = canvas_id.split('/')
    return arr.slice(-1)[0]
  },

  photos: function () {
    const s = this.mainSequence()
    const canvases = s.getCanvases()
    return canvases.map(canvas => ({
      code: this.getCanvasCode(canvas.id),
      caption: canvas.getLabel(),
      likes: 0,
      id: canvas.id,
      display_src: this.getCanvasMainThumb(canvas),
    }))
  },

  getNormalizedTree: function () {
    const node = new schema.Entity('nodes')
    const nodes = new schema.Array(node)
    node.define({ nodes })
    const tree = new schema.Entity('tree', { nodes })
    const toc = normalize(this.getDefaultTree(), tree)
    window.toc = toc
    return toc
  },

  getVueTree: function () {
    const normalized = this.getNormalizedTree()
    const tree = normalized.entities.tree[0].nodes
    const nodes = normalized.entities.nodes

    var toc = {
      id: 0,
      name: this.getEnglishTitle(),
      children: this.getChildNodes(tree, nodes),
    }

    return toc
  },

  getChildNodes: function (tree, nodes) {
    return tree.map((id) => {
      var node = {}
      node.id = nodes[id].id
      node.name = nodes[id].label
      if (nodes[id].nodes.length) {
        node.children = this.getChildNodes(nodes[id].nodes, nodes)
      }
      return node
    })
  },

}

export default ManifestoVueMixins
