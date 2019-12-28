export class NamingConverter {

  public static toJavaName(jsName: string): string {
    const jsNameParts = jsName.split('-');
    let javaName = '';
    jsNameParts.forEach(jsNamePart => {
      javaName += jsNamePart.charAt(0).toUpperCase() + jsNamePart.slice(1);
    });
    return javaName;
  }

  public static toJsName(javaName: string): string {
    const javaNameParts = javaName.match(/[A-Z][a-z]+/g);
    let jsName = '';
    javaNameParts.forEach(javaNamePart => {
      jsName += javaNamePart.charAt(0).toLowerCase() + javaNamePart.slice(1) + '-';
    });
    return jsName.slice(0, jsName.length - 1);
  }

}
