function StudentService(){
	this.studentList = [];
	this.add = function(student){
		this.studentList.push(student);
	}
	this.getAll = function(){
		return this.studentList;
	}
	
}