// object shortcuts
var doc = document;
// apprivations
var undef = "undefined";

var jm = {};

// get all elements
jm.getAll = function()
{
	var allElements = [];
	if(typeof doc.all != undef) {
		allElements = doc.all;
	} else {
		allElements = doc.getElementsByTagName("*");
	}
	return allElements;
}

// get element by id
jm.getById = function (id) 
{
	var element = doc.getElementById(id);
	return element;
}

// get elements by tag name 
jm.getByTag = function (tagName) 
{
	var elements = doc.getElementsByTagName(tagName);
	return elements;
}

// get elements by class name
jm.getByClass = function(theClass) 
{
	// function variables
	var allElements = jm.getAll(),
		matchedElements = [],
		i,
		pattern,
		len;

	// get all elements
	allElements = jm.getAll();

	// search for class name "theClass"
	pattern = new RegExp("(^| )" + theClass + "( |$)");

	for (i = 0, len = allElements.length; i < len; ++i) {
		if(pattern.test(allElements[i].className)) {
			matchedElements[matchedElements.length] = allElements[i];
		}
	}
	return matchedElements;	
}

// get node name
jm.tagName = function(element)
{
	var name = element.nodeName;
	return name;
}

// get node type
jm.type = function(element)
{
	var type = element.nodeType;
	return type;
}

// get parent
jm.parent = function(element)
{
	var parentElement = element.parentNode;
	return parentElement;
}

// get node childs
jm.childs = function(element)
{
	var elements = element.childNodes,
		i,
		len,
		matched = [];

	// ignore text nodes
	for (i = 0, len = elements.length; i < len; ++i) {
		if(jm.type(elements[i]) != 3) {
			matched[matched.length] = elements[i];
		}
	}
	return matched;
}
