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

  demo_post_3 = Post.create!({:blog_id => demo_blog_1.id, :author_id => demo.id, :photo_url => 'https://www.filepicker.io/api/file/rWnXgUyQoqYwa3d7YAEA'})
    demo_tag_6 = Tag.create!({:post_id => demo_post_3.id, :body => 'delorean'})
    demo_tag_7 = Tag.create!({:post_id => demo_post_3.id, :body => 'cars'})


demo_blog_2 = Blog.create!({:user_id => anotherUser.id, :name => 'Best Recipies', :description => 'For food lovers everywhere!'})

  demo_post_4 = Post.create!({:blog_id => demo_blog_2.id, :author_id => anotherUser.id, 
    :title => 'Miso-Marinated Black Cod with Sesame Spinach', :body => 
        '1/4 cup loosely packed light brown sugar 
         1/4 cup yellow miso 
         1/4 cup mirin 
         1/4 cup sake 
         Six 6-ounce black cod fillets 
         Olive oil to coat pan 
         Sesame Spinach 
         Dressing remaining from the Sesame Spinach recipe

         1. Heat the brown sugar with 1/4 cup water in a small  saucepan, stirring, until the sugar is completely 
            dissolved. Cool for 10 minutes, then stir in the miso, mirin, and sake to make a smooth paste. 
            Coat the black cod with the miso paste, cover, and refrigerate at least 2 hours, or as long as 2 days. 
         
         2. To cook, preheat the broiler to high with a rack set in the upper third of the oven.
            Place the marinated black cod on a lightly oiled baking sheet and broil until the fish is fully cooked 
            and the surface is lightly browned, 10 to 15 minutes, depending on the thickness of the fish. 
            (Alternatively, the fish can be baked in a preheated 450F oven for 10 to 15 minutes.) 
         
         3. Center the fish on a serving plate, and place a small bundle of the sesame spinach to the side. 
            Drizzle some of the remaining sesame dressing around the fish and plate. '
    })

    demo_tag_8 = Tag.create!({:post_id => demo_post_4.id, :body => 'miso'})
    demo_tag_9 = Tag.create!({:post_id => demo_post_4.id, :body => 'food'})

  demo_post_5 = Post.create!({:blog_id => demo_blog_2.id, :author_id => anotherUser.id, 
    :photo_url => 'https://www.filepicker.io/api/file/YDTCsY29Rg2E09mXcccO'
  })

    demo_tag_10 = Tag.create!({:post_id => demo_post_5.id, :body => 'food'})
    demo_tag_11 = Tag.create!({:post_id => demo_post_5.id, :body => 'favorite things'})
    demo_tag_12 = Tag.create!({:post_id => demo_post_5.id, :body => 'cinnamon'})