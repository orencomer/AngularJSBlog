using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace AngularJSBlog.Models
{
    public class Post
    {
        public int PostId { get; set; }
        [Required]
        [StringLength(200)]
        public string Name { get; set; }
        public string Body { get; set; }
        public DateTime PublishDate { get; set; }
        public bool IsPublished { get; set; }
    }
}