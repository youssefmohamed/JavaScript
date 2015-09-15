// object shortcuts
var doc = document;
// apprivations
var undef = "undefined";
// constants
var OO = 1e9;

var jm = {};
jm.sort = {};

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

// cross browser log method
jm.log = function (msg) {
    console.log(msg);
}

jm.sortAsc = function (values) {
    values.sort(jm.compareAsc);
    return values;
}

jm.sortDesc = function (values) {
    values.sort(jm.compareDesc);
    return values;
}

jm.compareAsc = function (a, b) {
    if (typeof a === "string") {
        if (a < b) {
            return -1;
        }
        if (a > b) {
            return 1;
        }
        return 0;
    } else {
        return a - b;
    }
}

jm.compareDesc = function (a, b) {
    if (typeof a === "string") {
        if (a > b) {
            return -1;
        }
        if (a < b) {
            return 1;
        }
        return 0;
    } else {
        return b - a;
    }
}

// check on property
jm.has = function (obj, property) {
	return obj.hasOwnProperty(property);
}

// make obj inherit all props from src
/*
	// TODO
*/
jm.create = function (obj1,obj2) {
	obj1.c = function (obj2) {
		var p = function () {};
		p.prototype = obj2;
		return new p();
	}
}

jm.write = function (txt) {
	doc.writeln(txt);
}

jm.toInt = function (num, base) {
	return parseInt(num,base || 10);
}

jm.isNumber = function (num) {
	return typeof num === 'number' && isFinite(num);
}
// insertion sort 
/*jm.sort.insertion = function(array)
{
	var len = array.length,
		i,
		j,
		key;

	for (i = 1; i < len; ++i) {
		
		key = array[i];
		j = i-1;
		
		while(key < array[j] ) {
			array[j+1] = array[j];
			--j;
		}
		array[j+1] = key;
	}
	return array;
}

// merge sort
jm.sort.merge = function(array, p, r)
{
    if(p < r) {
		var q = Math.ceil((p + r)/2);
        alert(p + " " + q);
		jm.sort.merge(array,p,q);
		jm.sort.merge(array,q+1,r);
        jm.sort.mergeAuxalary(array, p, q, r);
	}
}*/

// merge function for merge sort
/*jm.sort.mergeAuxalary = function(array, p, q, r)
{
	var n1 = q-p+1,
		n2 = r-q,
		n = n1 + n2,
		left = [],
		right = [],
		i,
		j,
		k;

	for (i = 0; i < n1; ++i) {
		left[left.length] = array[p+i];
		//doc.write("left " + left[i] + "<br>");
	}

	for (j = 0; j < n2; ++j) {
		right[right.length] = array[q+j];
		//doc.write("right " + right[j] + "<br>");
	}

	left[n1] = right[n2] = OO;
	
    alert(left + " " + right);
	
    i=j=0;
	for(k = p; k <= r; ++k) {
		if(left[i] <= right[j]) {
			array[k] = left[i];
			doc.write(array[k] +  "<br>");
			++i;
		} else {
			array[k] = right[j];
			++j;
		}
	}
}*/
