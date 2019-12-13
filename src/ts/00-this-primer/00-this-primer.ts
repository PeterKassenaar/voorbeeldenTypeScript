// Namespace *ONLY* used here to avoid naming collisions
// with other files (with generic names as 'Person', 'myClass', etc).

namespace thisPrimer {
  console.log('Hello TypeScript');
  // Invoking of the 'this' keyword depends on *who* is invoking
  //1.  Via  function
  function myFunction() {
    console.log('Function, "this" points at :::', this);
  }
  myFunction(); // The window is invoking the function, so this points to Window object.

  // 2. Via Object
  //   const myObj = {
  //     myMethod() {
  //       console.log('Object, "this" points at :::', this);
  //     }
  //   };
  //   myObj.myMethod(); // The object myObj is invoking the function, so 'this' points to the object

  // 3. Via class
  //   class MyClass {
  //     name: string = 'Peter';
  //     myMethod() {
  //       console.log('Class, "this" points at :::', this);
  //     }
  //   }
  //
  //   const myClass = new MyClass();
  //   myClass.myMethod(); // The class is invoking the function, so 'this' points to the class.

  // 4. Element in page, a clickable <a href>
  // const elem = document.querySelector('.click');

  // The 'this' keyword is now explicitely typed, because of the key "noImplicitThis" in the
  // tsconfig.json. So this looks like two arguments, but it is actually just one. The this
  // keyword as first parameter is just a way to notate this. The 'e' is still the first argument.
  // Now we can type 'this' as any HTML-DOM element.
  // const handleClick = function(this: HTMLAnchorElement, e: Event) {
  // 	e.preventDefault();
  // 	console.log(this); // <a href="...">...</a>
  // 	console.log(
  // 		'href and classes of this link:::',
  // 		this.href,
  // 		this.className
  // 	);
  // };
  // elem.addEventListener('click', handleClick, false);
}
