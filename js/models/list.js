// List Model

listIDAssigner = 0

class List{
  constructor(title){
    this.title = title
    this.tasks = []
    this.id = ++listIDAssigner
    List.all.push(this)
  }

  static find(id){
    return List.all.filter(function(list){
      return list.id === parseInt(id)
    })
  }

  static findByTitle(title){
    return List.all.filter(function(list){
      return list.title === title
    })
  }
  static delete(id){
    List.all = List.all.filter(function(list){
      return list.id !== id
    })
  }
}
List.all = []
