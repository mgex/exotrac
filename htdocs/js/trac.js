$.fn.addAnchor = function(title) {
  title = title || "Link here";
  return this.filter("*[@id]").each(function() {
    $("<a class='anchor'> \u00B6</a>").attr("href", "#" + this.id)
      .title(title).appendTo(this);
  });
}

$.fn.checked = function(checked) {
  if (checked == undefined) { // getter
    if (!this.length) return false;
    return this.get(0).checked;
  } else { // setter
    return this.each(function() {
      this.checked = checked;
    });
  }
}

$.fn.enable = function(enabled) {
  if (enabled == undefined) enabled = true;
  return this.each(function() {
    this.disabled = !enabled;
    var label = $(this).ancestors("label");
    if (!label.length && this.id) {
      label = $("label[@for='" + this.id + "']");
    }
    if (!enabled) {
      label.addClass("disabled");
    } else {
      label.removeClass("disabled");
    }
  });
}

$.loadStyleSheet = function(href, type) {
  type = type || "text/css";
  $(document).ready(function() {
    if (document.createStyleSheet) { // MSIE
      document.createStyleSheet(href);
    } else {
      $("<link rel='stylesheet type='" + type + "' href='" + href + "' />")
        .appendTo("head");
    }
  });
}

// Used for dynamically updating the height of a textarea
function resizeTextArea(id, rows) {
  var textarea = $("#" + id).get(0);
  if (!textarea || textarea.rows == undefined) return;
  textarea.rows = rows;
}

// The following are defined for backwards compatibility with releases prior
// to Trac 0.11

function addEvent(elem, type, func) {
  $(elem).bind(type, func);
}
function addHeadingLinks(container, title) {
  $.each(["h1", "h2", "h3", "h4", "h5", "h6"], function() {
    $(this, container).addAnchor(title);
  });
}
function enableControl(id, enabled) {
  $("#" + id).enable(enabled);
}
function getAncestorByTagName(elem, tagName) {
  return $(elem).ancestors(tagName).get(0);
}
