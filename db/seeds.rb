# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

anotherUser = User.create!({:username => Faker::Internet.user_name, :password => 'dummy_user', :email => Faker::Internet.safe_email})

anotherUser2 = User.create!({:username => Faker::Internet.user_name, :password => 'dummy_user', :email => Faker::Internet.safe_email})

demo = User.create!({:username => 'demo', :password => 'freejamboree', :email => 'demo@blogjamboree.com'})



demo_blog_1 = Blog.create!({:user_id => demo.id, :name => 'My Favorite Things!', :description => 'This blog is all about my favorite things'})

  demo_post_1 = Post.create!({:blog_id => demo_blog_1.id, :author_id => demo.id, :title => 'Favorite names!', :body => 
      Faker::Name.first_name +
      "\n" + Faker::Name.first_name +
      "\n" + Faker::Name.first_name +
      "\n" + Faker::Name.first_name +
      "\n" + Faker::Name.first_name
    })

    demo_tag_1 = Tag.create!({:post_id => demo_post_1.id, :body => 'names'})
    demo_tag_2 = Tag.create!({:post_id => demo_post_1.id, :body => 'favorite things'})

    demo_comment_1 = Comment.create!({:post_id => demo_post_1.id, :author_id => anotherUser.id, :body => "Wow good list!"})
    demo_comment_2 = Comment.create!({:post_id => demo_post_1.id, :author_id => demo.id, :body => "Thanks! :)"})


  demo_post_2 = Post.create!({:blog_id => demo_blog_1.id, :author_id => demo.id, :title => 'Favorite cars!', :body => 
    "Ferrarri" +
    "\n" + 'Mercedes Benz' +
    "\n" + 'Volks Wagon' +
    "\n" + 'Chrysler' +
    "\n" + 'DeLorean Time Machine!'
  })

    demo_tag_3 = Tag.create!({:post_id => demo_post_2.id, :body => 'delorean'})
    demo_tag_4 = Tag.create!({:post_id => demo_post_2.id, :body => 'favorite things'})
    demo_tag_5 = Tag.create!({:post_id => demo_post_2.id, :body => 'cars'})

    demo_comment_3 = Comment.create!({:post_id => demo_post_2.id, :author_id => anotherUser2.id, :body => "first"})

  demo_post_3 = Post.create!({:blog_id => demo_blog_1.id, :author_id => demo.id, :photo_url => 'https://www.filepicker.io/api/file/rWnXgUyQoqYwa3d7YAEA'})
    demo_tag_6 = Tag.create!({:post_id => demo_post_3.id, :body => 'delorean'})
    demo_tag_7 = Tag.create!({:post_id => demo_post_3.id, :body => 'cars'})

